const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxTcWLtK-uLZ49MYQg8P7Mrdc6twa0OEyCsLrcXYscRyqBF3ccQlGJEFW7MN5ONt9e_/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Basic native validation (required fields, valid email, etc.)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      preferredContact: form.preferredContact.value,
      videoType: form.videoType.value,
      description: form.description.value.trim(),
      additionalInfo: form.additionalInfo.value.trim(),
      submittedAt: new Date().toISOString(),
      pageUrl: window.location.href,
    };

    if (!SCRIPT_URL || SCRIPT_URL.includes("PASTE_YOUR")) {
      showStatus(
        "error",
        "Form isn't connected to Google Sheets yet — set SCRIPT_URL in contact-form.js"
      );
      return;
    }

    setLoading(true);
    showStatus("loading", "Sending your message...");

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result && result.status === "success") {
        showStatus(
          "success",
          "Thanks! Your message has been sent — we'll get back to you within 24 hours."
        );
        form.reset();
      } else {
        throw new Error((result && result.message) || "Unexpected response from server.");
      }
    } catch (err) {
      console.error("Contact form submission failed:", err);
      showStatus(
        "error",
        "Something went wrong sending your message. Please try again, or email us directly at contact@editkaro.in."
      );
    } finally {
      setLoading(false);
    }
  });

  function setLoading(isLoading) {
    submitBtn.disabled = isLoading;
    submitBtn.innerHTML = isLoading
      ? '<i class="fa-solid fa-spinner fa-spin"></i> Sending...'
      : '<i class="fa-solid fa-paper-plane"></i> Send Message';
  }

  function showStatus(type, message) {
    statusEl.textContent = message;
    statusEl.className = "form-status " + type;
  }
});

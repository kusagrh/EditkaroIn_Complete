// Portfolio Data Matrix
    const portfolioData = [
      {
        id: "1",
        category: "short-form",
        categoryName: "Short-Form",
        title: "Fast-Paced Reel Edit",
        description: "Dynamic motion graphics, jump cuts, and sound design optimized for Instagram Reels.",
        thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/r4ePUuozB7k?autoplay=1&mute=1"
      },
      {
        id: "2",
        category: "long-form",
        categoryName: "Long-Form",
        title: "Podcast  Music Videos",
        description: "Multi-cam switching, audio enhancement, and subtle graphic overlays.",
        thumbnail: "https://i.ytimg.com/vi/lVVtJ_WBb04/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAdwTx9a9VZ6R4H2Z0AdDZwNNdFIQ?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/lVVtJ_WBb04?autoplay=1&mute=5"
      },
      {
        id: "3",
        category: "gaming",
        categoryName: "Gaming",
        title: "Valorant Highlights Montage",
        description: "Beat-synced edits, speed ramping, and custom visual effects.",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/H2N0eHGOi_w?autoplay=1&mute=1"
      },
      {
        id: "4",
        category: "football",
        categoryName: "Football Edits",
        title: "UCL Legendary Moments Edit",
        description: "High-octane football montage with 3D tracking and sound design.",
        thumbnail: "https://i.ytimg.com/vi/BuIC7Q3q6z4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBUnyF-jfHoEWMwKKMUm9xd3DpcXQ?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/BuIC7Q3q6z4?autoplay=1&mute=50"
      },
      {
        id: "5",
        category: "ecommerce",
        categoryName: "eCommerce Ads",
        title: "Modern Watch Ad Campaign",
        description: "Sleek product callouts, macro shots, and conversion-focused pacing.",
        thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/8kyKS6aZkzQ?autoplay=1&mute=1"
      },
      {
        id: "6",
        category: "documentary",
        categoryName: "Documentary",
        title: "Cinematic Travel Narrative",
        description: "Story-driven editing style with immersive soundscapes and color pass.",
        thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
      },
      {
        id: "7",
        category: "color-grading",
        categoryName: "Color Grading",
        title: "Cinematic Film Tone Reel",
        description: "Before-and-after breakdown of Teal & Orange film emulation LUTs.",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/mUqtC3eNjnI?autoplay=1&mute=1"
      },
      {
        id: "8",
        category: "anime",
        categoryName: "Anime",
        title: "Anime Music Video (AMV)",
        description: "Precision beat syncing, flash transitions, and color enhancements.",
        thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/cf4AUbSbdRQ?autoplay=1&mute=1"
      },
      {
        id: "9",
        category: "ads",
        categoryName: "Ads",
        title: "Promo Ad",
        description: "Clean motion graphics, UI walkthroughs, and clear call-to-actions.",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        videoEmbed: "https://www.youtube.com/embed/35npVaFGHMY?autoplay=1&mute=1"
      }
    ];

    // DOM Elements
    const portfolioGrid = document.getElementById('portfolioGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('videoModal');
    const modalClose = document.getElementById('modalClose');
    const modalIframe = document.getElementById('modalIframe');
    const modalTag = document.getElementById('modalTag');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const cursorLight=document.querySelector(".cursor-light");
    


    // Render Cards Function
    function renderPortfolio(items) {
      portfolioGrid.innerHTML = '';
      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.setAttribute('data-category', item.category);
        
        card.innerHTML = `
          <div class="card-thumbnail">
            <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" />
            <div class="play-overlay">
              <div class="play-icon"><i class="fa-solid fa-play"></i></div>
            </div>
          </div>
          <div class="card-info">
            <div class="card-tag">${item.categoryName}</div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.description}</p>
          </div>
        `;

        // Hover video preview (add previewUrl in portfolioData for each card)
        const thumb = card.querySelector('.card-thumbnail');
        card.addEventListener('mouseenter', () => {
          if (item.previewUrl) {
            thumb.innerHTML = `<video src="${item.previewUrl}" autoplay muted loop playsinline></video>`;
          }
        });

        card.addEventListener('mouseleave', () => {
          if (item.previewUrl) {
            thumb.innerHTML = `
              <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" />
              <div class="play-overlay">
                <div class="play-icon"><i class="fa-solid fa-play"></i></div>
              </div>`;
          }
        });

        card.addEventListener('click', () => openModal(item));
        portfolioGrid.appendChild(card);

      });
    }


    // Cursor spotlight background effect
    document.addEventListener("mousemove", (e) => {
      cursorLight.style.left = e.clientX + "px";
      cursorLight.style.top = e.clientY + "px";
    });

    // Filter Logic
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active class toggle
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Smooth transition effect
        portfolioGrid.classList.add('fade-out');
        
        setTimeout(() => {
          if (filterValue === 'all') {
            renderPortfolio(portfolioData);
          } else {
            const filteredData = portfolioData.filter(item => item.category === filterValue);
            renderPortfolio(filteredData);
          }
          portfolioGrid.classList.remove('fade-out');
          portfolioGrid.classList.add('fade-in');
        }, 200);
      });
    });

    // Lightbox Modal Functions
    function openModal(item) {
      modalIframe.src = item.videoEmbed;
      modalTag.textContent = item.categoryName;
      modalTitle.textContent = item.title;
      modalDesc.textContent = item.description;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('active');
      modalIframe.src = '';
      document.body.style.overflow = 'auto';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Initialize Page
    renderPortfolio(portfolioData);

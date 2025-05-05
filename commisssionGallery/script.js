// Image data with descriptions
const imageData = [
    {
        src: "drawings/college.jpg",
        description: "College campus sketch with detailed architecture highlighting the main buildings and surrounding landscape."
    },
    {
        src: "drawings/fish.jpeg",
        description: "Vibrant fish illustration capturing the intricate scales and flowing fins in a stylized underwater setting."
    },
    {
        src: "drawings/groupphoto.PNG",
        description: "Group portrait drawing showcasing multiple figures with individual expressions and characteristics."
    },
    {
        src: "drawings/jellyfish.jpeg",
        description: "Ethereal jellyfish artwork with translucent tentacles and delicate details floating in a deep blue environment."
    },
    {
        src: "drawings/julia.jpg",
        description: "Portrait drawing of Julia featuring expressive eyes and detailed facial features capturing her personality."
    },
    {
        src: "drawings/underwater.jpg",
        description: "Underwater scene depicting various marine life and plant elements in a rich aquatic ecosystem."
    },
    {
        src: "drawings/hills.jpeg",
        description: "Serene landscape drawing of rolling hills with subtle shading techniques creating depth and atmosphere."
    },
    {
        src: "drawings/image0.jpg",
        description: "Original artwork with unique composition showing creative technique and artistic vision."
    }
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeModalBtn = document.getElementById('closeModal');

function createGallery() {
    imageData.forEach((item, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.innerHTML = `<img src="${item.src}" alt="Drawing ${index + 1}">`;
        imageItem.addEventListener('click', () => openModal(item));
        gallery.appendChild(imageItem);
    });
}

function openModal(item) {
    modalImage.src = item.src;
    modalDescription.textContent = item.description;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', createGallery);
import React from 'react'

function Home() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item ">
      <img src="Assets\download (1).jpeg" class="d-block w-100" alt="First slide"  />
    </div>
    <div class="carousel-item active">
      <img src="Assets\download (2).jpeg" class="d-block w-100" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img src="Assets\download.jpeg" class="d-block w-100" alt="Third slide"/>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  </div>
</div>
    </div>
  )
}

export default Home

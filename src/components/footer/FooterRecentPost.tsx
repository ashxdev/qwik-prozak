export const FooterRecentPost = () => {
  return (
    <div class="col-md-6 col-lg-3 mb-4">
      <h5 class="mb-4 text-white">Recent post</h5>
      <div class="mb-4 position-relative">
        <div>
          <a href="#" class="badge bg-danger mb-2">
            <i class="fas fa-circle me-2 small fw-bold"></i>Business
          </a>
        </div>
        <a href="post-single-3.html" class="btn-link text-white fw-normal">
          Up-coming business bloggers, you need to watch
        </a>
        <ul class="nav nav-divider align-items-center small mt-2 text-muted">
          <li class="nav-item position-relative">
            <div class="nav-link">
              by
              <a href="#" class="stretched-link text-reset btn-link">
                Dennis
              </a>
            </div>
          </li>
          <li class="nav-item">Apr 06, 2022</li>
        </ul>
      </div>
      <div class="mb-4 position-relative">
        <div>
          <a href="#" class="badge bg-info mb-2">
            <i class="fas fa-circle me-2 small fw-bold"></i>Marketing
          </a>
        </div>
        <a href="post-single-3.html" class="btn-link text-white fw-normal">
          How did we get here? The history of the business told through tweets
        </a>
        <ul class="nav nav-divider align-items-center small mt-2 text-muted">
          <li class="nav-item position-relative">
            <div class="nav-link">
              by
              <a href="#" class="stretched-link text-reset btn-link">
                Larry
              </a>
            </div>
          </li>
          <li class="nav-item">May 29, 2022</li>
        </ul>
      </div>
    </div>
  )
}

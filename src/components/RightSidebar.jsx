<section class="">
  <!-- sticky Search Nav -->
  <div class="row bg-black sticky-top py-2">
    <form class="d-flex justify-content-between">
      <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
  <!-- Friend suggestions -->
  <div class="friend-suggestions bg-dark p-3 mt-2 rounded w-100">
    <h4 class="text-light">You might like</h4>

    <div class="row">
      <div class="col m-0 p-0">
        <ul class="sidebar mx-1 my-0 p-0">
          <% for (const usuario of users.slice(0,3)) { %>
          <li class="">
            <form
              class="d-flex justify-content-between align-items-center me-0"
              action="/follow"
              method="POST"
            >
              <a class="text-decoration-none text-light" href="/<%= usuario.userName %>">
                <img
                  class="rounded-circle w-15 side-bar-icon d-inline m-0"
                  src="/img/<%= usuario.photoProfile %> "
                  alt="Photo Profile"
                />
                <p class="d-none d-lg-inline">@<%= usuario.userName %></p>
              </a>
              <input type="hidden" name="objectId" value="<%= usuario.id %>" />

              <button type="submit" class="btn btn-primary rounded-pill font-register">
                follow
              </button>
            </form>
          </li>
          <% } %>
        </ul>
      </div>
    </div>
  </div>
</section>

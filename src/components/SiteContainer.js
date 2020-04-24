import React from 'react';

const SiteContainer = (props) => {
    return (
      <div>
        {props.children}
        <footer className="mt-2">
          <div>
            <p
              className="text-muted"
            >
              <small>
            <span>&copy; {new Date().getFullYear()} &bull;</span>
                <span className="mx-1">Powered by</span>
                <a
                  href="https://techkunja.com.np"
                  target="_blanl"
                  rel="noopener noreferrer"
                >
                  Tech Kunja
                </a>
                .
              </small>
            </p>
          </div>
        </footer>
      </div>
    );
}

export default SiteContainer;

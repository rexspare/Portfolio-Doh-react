import '../styles/linkHover.css'


const LeftNavbar = () => {
  return (
    <div id="p" className="flex w-screen h-screen justify-end">
      <div className="flex flex-col justify-center w-16 h-full overflow-hidden bg-off-white">
        <div className="origin-center -rotate-90 my-auto mt-32">

          <a className="m-3 text-xs tracking-widest" href="https://github.com/Doh1024">GH   
            <svg viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </a>
            
          <a className="m-3 text-xs tracking-widest" href="https://github.com/Doh1024">LI
            <svg viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </a>

          <a className="m-3 text-xs tracking-widest" href="https://github.com/Doh1024">GH
            <svg viewBox="0 0 70 36">
              <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
            </svg>
          </a>

        </div>
        <div class="inline-flex justify-center w-full mb-72">
          <div class="h-[150px] bg-black w-[1px]"></div>
        </div>
        <div className="tracking-widest origin-center -rotate-90 text-sm text-black my-auto mb-20">©2022</div>
      </div>

    </div>
  )
}


export default LeftNavbar

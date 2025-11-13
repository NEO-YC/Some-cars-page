import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='bg-danger-subtle'>
            <div className="container d-flex justify-content-between fs-1">
                <i
                    className="bi bi-facebook"
                    style={{ color: "#1877F2" }} // Facebook Blue
                ></i>

                <i
                    className="bi bi-instagram"
                    style={{
                        background:
                            "linear-gradient(45deg,#F58529,#FEDA77,#DD2A7B,#8134AF,#515BD4)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                    }} // Instagram gradient
                ></i>

                <i
                    className="bi bi-tiktok"
                    style={{ color: "#25F4EE" }} // TikTok cyan (brand color)
                ></i>
            </div>
        </footer>

    </div>
  )
}

export default Footer
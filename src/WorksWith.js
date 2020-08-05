import React,  { useRef, useEffect }  from 'react';
import './App.css';

function WorksWith() {

  const refim1 = useRef(null)

  useEffect(() => {
    const anim1  = refim1.current.animate(
        [{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }],
        {
            easing: 'steps(7, end)',
            duration: 1200,
            playbackRate: 1,
            iterations: Infinity
        }
    )

    function move_im() {
        anim1.playbackRate *= 1.1;
        setInterval(
            () => {
                if (anim1.playbackRate > 1) {
                    anim1.playbackRate *= .9;
                }
            }, 6000)
    }
    window.addEventListener('click', move_im)
})
  

  return (
    <div className="workswith">

      <h1> Tried some own animation</h1>
<div ref={refim1}>
      <img  className="relative1"  alt="some alt" src="https://mutify.app/images/Zoom-0cb3267633.png" />
      <img   className="relative2" alt="some alt" src="https://mutify.app/images/Skype-64e68baaf2.png" />
      <img  className="relative3" alt="some alt" src="https://mutify.app/images/FB-1b46484926.png" />
      </div>
<br />
<h2> Only items before this are animated for vertical motion. </h2>

<img alt="some alt"  src="https://mutify.app/images/FaceTimePopup-8b68d7ca18.jpg" />
          </div>
  );
}

export default WorksWith;

import React, { Suspense, useRef, useEffect} from "react";
const SectionMultiBarContainer = React.lazy(() =>
  import("../Components/Containers/SectionMultiBarContainer")
);

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

function LATS() {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  return (
    <>
    <div>
    <button style={{position:"fixed"}} onClick={executeScroll}></button>
  </div>
      <h1>Líneas de Alta Tensión</h1>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <SectionMultiBarContainer
            activity="PINM"
            title="Inspección Minuciosa"
            description="Piquetes"
            detail="Minuciosa"
            
          ></SectionMultiBarContainer>
        </Suspense>
      </div>
{/*       <div >
        <Suspense fallback={<div>Loading...</div>}>
          <SectionMultiBarContainer
            activity="PINT"
            title="Inspección Terrestre"
            description="Piquetes"
            detail="Terrestre"
          ></SectionMultiBarContainer>
        </Suspense>
      </div> */}
    </>
  );
}

export default LATS;

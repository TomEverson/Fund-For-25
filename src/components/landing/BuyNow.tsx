import { useState } from 'preact/hooks';

const DonationButton = () => {
  const [isPopoutVisible, setPopoutVisible] = useState(false);

  const togglePopout = () => {
    console.log(isPopoutVisible)
    setPopoutVisible(!isPopoutVisible);
  };

  return (
    <div>
      <a
        class="items-center h-12 justify-center rounded-full font-semibold duration-200 focus:outline-none inline-flex px-6 py-3 text-center w-full border-2
        bg-sunset-mango border-sunset-mango text-sunset-roasted
        hover:bg-transparent hover:text-sunset-mango hover:border-sunset-mango
        focus-visible:outline-sunset-mango focus-visible:ring-sunset-mango
        lg:w-auto cursor-pointer"
        href="javascript:void(0);"
        onClick={togglePopout}
      >
        Donate Now
      </a>

      {isPopoutVisible && (
        <div
          id="popout"
          class="fixed bg-white border-2 border-sunset-mango rounded-lg p-6 shadow-xl top-16 left-1/2 transform -translate-x-1/2 w-80 z-50 transition-all duration-300 ease-in-out opacity-100 scale-100 visibility-visible"
        >
          <h3 class="text-xl font-semibold mb-4 text-center text-sunset-mango">
            Select Your Region
          </h3>
          <ul class="space-y-3">
            <li>
              <a
                href="https://docs.google.com/forms/d/1L_nhnbvTBB45Qf8xFhshNAeAQcJdfxDFTV7VAQxg4hw/edit?usp=drivesdk"
                target="_blank"
                class="text-sunset-mango hover:text-sunset-roasted font-semibold transition duration-300 ease-in-out hover:scale-105"
              >
                USA
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/1HVTOO09kkPhFHITmIkH2LD1J3l6wT2scoHzj9tI0S34/edit?usp=drivesdk"
                target="_blank"
                class="text-sunset-mango hover:text-sunset-roasted font-semibold transition duration-300 ease-in-out hover:scale-105"
              >
                UK
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/1ocIbHjxRoN43fWHutDJD88SkqpHkxmnkwLRoCvZ9y-w/edit?usp=drivesdk"
                target="_blank"
                class="text-sunset-mango hover:text-sunset-roasted font-semibold transition duration-300 ease-in-out hover:scale-105"
              >
                Thailand
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/1sg3goA11dwgLCAetavsjP1xP_euoHhTynlHelDVsU1Y/edit?usp=drivesdk"
                target="_blank"
                class="text-sunset-mango hover:text-sunset-roasted font-semibold transition duration-300 ease-in-out hover:scale-105"
              >
                Malaysia
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DonationButton;

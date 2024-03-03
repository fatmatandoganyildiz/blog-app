import React from "react";
import { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Link to="/signup">
        <button
          className="bg-red-800 text-white px-3 py-2 rounded-sm cursor-pointer"
          onClick={handleClose}
        >
          I Accept
        </button>
      </Link>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="mx-10 my-14">
      <h3 className="font-semibold text-center my-3 text-lg">User Agreement</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
        iaculis elit. Cras eu est in orci sagittis facilisis in vel arcu.
        Vivamus vitae ipsum ac urna iaculis tincidunt eu non ante. Fusce non
        orci et quam lacinia rutrum. Integer vehicula sed mauris sed pretium.
        Donec blandit mollis lobortis. Aenean auctor tempus risus, vitae
        scelerisque leo commodo nec. Curabitur facilisis leo id est viverra, eu
        laoreet purus facilisis. Duis imperdiet aliquet consequat. Nullam
        euismod lorem non lectus placerat, ut scelerisque lectus pharetra. Donec
        ligula mauris, fermentum sit amet vulputate id, aliquet quis justo.
        Aliquam placerat lacus vel ante interdum pretium. Vivamus auctor
        volutpat neque quis commodo. Fusce vestibulum ipsum ut finibus
        vestibulum. Phasellus lobortis purus eget nulla scelerisque eleifend sed
        nec mi. Cras consectetur eros odio. Vivamus vel massa ac lorem
        sollicitudin consectetur. Proin luctus venenatis lectus ut rutrum. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Duis libero sapien,
        fringilla a rhoncus vel, suscipit et nibh. Pellentesque rutrum dapibus
        neque, at condimentum est venenatis sit amet. Sed ipsum quam, bibendum
        eu luctus dignissim, posuere et ligula. Etiam faucibus viverra nibh.
        Cras quis turpis augue. Nulla rhoncus tempus maximus. Suspendisse
        sagittis sollicitudin viverra. Mauris ac felis metus. Aenean risus leo,
        suscipit vitae tristique ac, dignissim quis massa. Etiam vel ligula sit
        amet nulla suscipit imperdiet. Ut eget placerat ante, et luctus massa.
        Pellentesque nec rutrum purus. Proin sit amet est massa. Mauris suscipit
        dapibus condimentum. Praesent feugiat augue dolor, et pretium orci
        ornare at. Praesent nisl nibh, feugiat at risus ac, mattis gravida
        velit. Sed mi urna, cursus nec mollis elementum, viverra vitae sem.
        Aenean tortor ipsum, aliquam a turpis eget, dapibus tincidunt ante. Sed
        sollicitudin mauris ut sagittis laoreet. Suspendisse vitae vehicula
        mauris. Praesent bibendum, justo sit amet volutpat dapibus, leo eros
        commodo ex, nec luctus orci lorem varius diam. Etiam eleifend vel ex ac
        viverra. Cras eget risus quis sem varius semper. Vestibulum pharetra
        orci id magna maximus, vitae ullamcorper metus pulvinar. Nunc malesuada
        risus at posuere scelerisque. Nullam fringilla justo vitae neque
        blandit, ut placerat lorem viverra. Vestibulum fermentum nisi ac lacus
        sagittis, vitae pulvinar ligula imperdiet. Integer finibus sed mauris ut
        ullamcorper. In eget efficitur erat, sed egestas odio. Phasellus finibus
        eros ac eros semper vestibulum. Donec auctor sapien a sapien mollis
        molestie ut vel lorem. Donec vel condimentum nunc, id euismod elit.
        Fusce aliquam a nunc eget pellentesque. Donec maximus felis mi, vel
        blandit tortor elementum ut. Vivamus elementum nisi nisi, vitae
        sollicitudin mauris egestas sed. Ut sapien ex, pharetra vel ultrices a,
        malesuada pellentesque enim. Nullam nulla nibh, posuere eu vestibulum a,
        suscipit sed erat. Duis molestie non ipsum et ornare. Suspendisse
        maximus lectus nulla. Fusce augue lorem, ultricies quis ipsum vel,
        sollicitudin luctus urna. Aliquam erat volutpat. Vestibulum orci justo,
        eleifend ut augue dictum, luctus ultrices quam. Integer ut vestibulum
        lectus. Suspendisse aliquet iaculis lorem non varius. Cras egestas ante
        quis nibh porta, vel pulvinar eros tristique. Ut neque risus,
        ullamcorper quis tempus tempus, ornare sit amet odio.
      </p>

      <button
        onClick={handleClick}
        className="bg-stone-800 text-white px-3 py-2 my-5 mx-5 rounded-sm cursor-pointer"
      >
        I Accept
      </button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;

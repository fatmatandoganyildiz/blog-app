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
        This User Agreement constitutes a legally binding agreement between you
        and Blog Company regarding your use of our services. By accessing or
        using our services, you agree to comply with the terms and conditions
        set forth in this Agreement. If you do not agree with any part of this
        Agreement, you may not use our services. By using our services, you
        agree to abide by all applicable laws and regulations and to be solely
        responsible for your conduct while using our services. You agree not to
        engage in any unlawful or prohibited activities. All content provided on
        our website, including but not limited to text, graphics, logos, images,
        and software, is the property of the Company or its licensors and is
        protected by copyright laws. The Company may terminate your access to
        our services at any time for any reason without prior notice. Our
        services are provided on an "as is" and "as available" basis. The
        Company makes no warranties, expressed or implied, regarding the
        accuracy, reliability, or availability of our services. The Company
        shall not be liable for any direct, indirect, incidental, special, or
        consequential damages arising out of or in any way connected with the
        use of our services.The Company reserves the right to modify or amend
        this Agreement at any time. Your continued use of our services after any
        such changes constitutes your acceptance of the new terms. By using our
        services, you acknowledge that you have read, understood, and agree to
        be bound by the terms and conditions of this Agreement.
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

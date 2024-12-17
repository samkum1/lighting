import React, { useState } from 'react';
import { Button, message, Modal } from 'antd';
import ApiService from '../api/apiService';

const AddBandwidthModal = ({ showGBModal, fetchUsernameInfo, setShowGBModal, accountInfo, gbToBeAdded, setGbToBeAdded }) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();


    const addGBToPlan = async () => {
        let payload = {
            username: accountInfo?.account,
            flow: gbToBeAdded,
            duration: 3
        }

        try {
            setConfirmLoading(true)
            const response = await ApiService.addGBToPlan(payload);
            messageApi.success(`${gbToBeAdded} GB is added successfully!`);
            setGbToBeAdded(0)
            setShowGBModal(false)
            fetchUsernameInfo()
            setConfirmLoading(false)
        } catch (err) {
            setConfirmLoading(false)
            console.log(
                err.response?.data?.error || "An error occurred while fetching account info"
            );
        }
    };

    return (
        <>
            {contextHolder}
            <Modal
                title="Are you sure?"
                open={showGBModal}
                footer={[]}
                closable={false}
            >
                <p>
                    <p className='text-[1rem]'>You are about to add {gbToBeAdded} GB into your plan.</p>

                    <div className='mt-3 flex gap-3'>
                        <button onClick={() => addGBToPlan()} className='bg-[#1675FF] text-[white] rounded-[.65019rem] px-6  text-[1rem] font-[600]'>
                            Add
                        </button>
                        <button onClick={() => setShowGBModal(false)} className='bg-[#1675ff1a] border-[0.949px] border-[#1675ff] rounded-[0.59288rem] text-[#1675ff] text-[1rem] font-[600]  px-6 py-[0.4rem]  flex items-center'>
                            Cancel
                        </button>

                    </div>
                </p>
            </Modal>
        </>
    );
};

export default AddBandwidthModal;
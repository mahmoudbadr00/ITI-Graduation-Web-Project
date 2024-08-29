import React from 'react';
import Courses from "../../../components/studentComponents/Courses/Courses";
import DefaultLayout from'../../../components/Layouts/DefaultLayout'


function page() {
    return (
        <>
            <DefaultLayout>
                <Courses />
            </DefaultLayout>
        </>
    );
}

export default page;

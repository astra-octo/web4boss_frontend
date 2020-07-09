import React from "react";
import {connect} from "react-redux";
import {IDefaultState, OrganizationTypes} from "../../store/states/types";
import {MainLayout} from "../../layouts";
import {
    BookOutlined,
    CalendarOutlined,
    CheckSquareOutlined,
    LikeOutlined,
    UserAddOutlined
} from "@ant-design/icons/lib";

function AppPage({organization}): JSX.Element {
    return (
        <MainLayout menuItems={[
            {
                id: 'courses',
                to: '/app/courses',
                title: 'Курсы',
                icon: <BookOutlined/>,
                children: []
            },
            {
                id: 'meetings',
                to: '/app/meetings',
                title: 'Мероприятия',
                icon: <UserAddOutlined/>,
                children: []
            },
            {
                id: 'calendar',
                to: '/app/calendar',
                title: 'Календарь',
                icon: <CalendarOutlined />,
                children: []
            },
            {
                id: 'tests',
                to: '/app/tests',
                title: 'Тесты',
                icon: <CheckSquareOutlined />,
                children: []
            },
            {
                id: 'statistic',
                to: '/app/statistic',
                title: 'Успеваемость',
                icon: <LikeOutlined />,
                children: []
            },
        ]}>
            asdasd
            {organization === null && (
                <div>Загрузка...</div>
            )}

            {organization !== null && (
                <>
                    {organization.type === OrganizationTypes.Info && (
                        <div>Info</div>
                    )}
                    {organization.type === OrganizationTypes.School && (
                        <div>School</div>
                    )}
                </>
            )}

        </MainLayout>
    );
}

export default connect(
    (state: IDefaultState) => ({
        organization: state.core.organization
    }),
)(AppPage);

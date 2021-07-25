import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const SidebarLeft = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);
    const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link p-mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link p-mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );

    return (
        <div>
            <div className="card">
                <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <h3>Left Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                    <h3>Right Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                    <h3>Top Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                    <h3>Bottom Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleFullScreen} fullScreen onHide={() => setVisibleFullScreen(false)}>
                    <h3>Full Screen Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleCustomToolbar} onHide={() => setVisibleCustomToolbar(false)} icons={customIcons}>
                    <h3>Sidebar with custom icons</h3>
                </Sidebar>

                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="p-mr-2" />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="p-mr-2" />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} className="p-mr-2" />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="p-mr-2" />
                <Button icon="pi pi-th-large" onClick={() => setVisibleFullScreen(true)} className="p-mr-2" />
                <Button icon="pi pi-plus" onClick={() => setVisibleCustomToolbar(true)} />
            </div>
        </div>
    )
}

export default SidebarLeft; 
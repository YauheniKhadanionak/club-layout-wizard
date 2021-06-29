import React, {Component} from 'react';
import {
    Button,
    Card,
    ElasticGrid,
    EmptyStateIcon,
    Header,
    IconPlus,
    Layout,
    Modal,
    Text,
    Tooltip
} from "@abc/protonpack";

import './index.css'
import first from './1.svg'
import second from './2.png'
import third from './3.png'
import fourth from './4.png'
import fifth from './5.png'
import sixth from './6.png'

const navItems = [
    {path: "/", label: "Dashboard", key: "Dashboard"},
    {path: "/help", label: "Help Center", key: "Help Center"},
];

const templates = [
    {name: 'Blank Template', image: first},
    {name: 'Basic Template', image: second},
    {name: 'Gym Club Template', image: third},
    {name: 'Workout Template', image: fourth},
    // {name: 'Gym Club Template', image: fifth},
    // {name: 'Gym Club Template', image: sixth},
]

export class Dashboard extends Component {
    state = {modal: false}

    render() {
        return (
            <Layout>
                <Layout.Header className="header">
                    <svg width="94" height="64" viewBox="0 0 94 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.48 22H19.608V5.992H13.872L10.512 15.064L7.176 5.992H1.44V22H5.568V11.2L9.6 22H11.424L15.48 11.2V22ZM26.8549 22H30.9829V15.544L37.0309 5.992H32.3509L28.9189 11.896L25.4389 5.992H20.7829L26.8549 15.544V22ZM41.7894 22H45.9174V9.592H50.3814V5.992H37.3014V9.592H41.7894V22ZM52.3463 22H56.4743V5.992H52.3463V22ZM73.3941 22H77.5221V5.992H71.7861L68.4261 15.064L65.0901 5.992H59.3541V22H63.4821V11.2L67.5141 22H69.3381L73.3941 11.2V22ZM80.4009 22H92.1369V18.52H84.5289V15.64H91.9689V12.136H84.5289V9.472H92.1369V5.992H80.4009V22Z"
                            fill="white"/>
                        <path
                            d="M1.204 34H1.652V30.234H6.09V29.828H1.652V26.706H6.16V26.3H1.204V34ZM15.7022 34H16.1502V26.3H15.7022V34ZM28.1776 34H28.6256V26.706H31.1876V26.3H25.6296V26.706H28.1776V34ZM46.4894 34H46.9094V26.3H46.4614V33.23L41.0854 26.3H40.6654V34H41.1134V27L46.4894 34ZM57.1597 34H62.1157V33.594H57.6077V30.234H62.0457V29.828H57.6077V26.706H62.1157V26.3H57.1597V34ZM71.4257 32.922C72.0137 33.65 73.0077 34.168 74.2677 34.168C76.2557 34.168 77.0537 33.146 77.0537 32.012C77.0537 30.458 75.6397 30.08 74.3237 29.73C73.1897 29.422 72.1397 29.142 72.1397 28.148C72.1397 27.224 73.0497 26.538 74.1977 26.538C75.1217 26.538 75.9477 26.818 76.5217 27.532L76.8437 27.238C76.2557 26.566 75.3877 26.132 74.1977 26.132C72.8537 26.132 71.6637 26.888 71.6637 28.148C71.6637 29.52 72.9377 29.842 74.1977 30.15C75.4017 30.458 76.5777 30.766 76.5777 32.012C76.5777 32.894 75.9617 33.762 74.2677 33.762C73.1337 33.762 72.2797 33.202 71.7897 32.628L71.4257 32.922ZM86.1837 32.922C86.7717 33.65 87.7657 34.168 89.0257 34.168C91.0137 34.168 91.8117 33.146 91.8117 32.012C91.8117 30.458 90.3977 30.08 89.0817 29.73C87.9477 29.422 86.8977 29.142 86.8977 28.148C86.8977 27.224 87.8077 26.538 88.9557 26.538C89.8797 26.538 90.7057 26.818 91.2797 27.532L91.6017 27.238C91.0137 26.566 90.1457 26.132 88.9557 26.132C87.6117 26.132 86.4217 26.888 86.4217 28.148C86.4217 29.52 87.6957 29.842 88.9557 30.15C90.1597 30.458 91.3357 30.766 91.3357 32.012C91.3357 32.894 90.7197 33.762 89.0257 33.762C87.8917 33.762 87.0377 33.202 86.5477 32.628L86.1837 32.922Z"
                            fill="white"/>
                    </svg>

                </Layout.Header>
                <Layout.NavBar items={navItems}/>
                <Layout.Content>
                    <div className="grid">
                        <Card abcId="content1" shadow={false} className="content content1">
                            <div>
                                <Header as="h3" className="dashboard-title">My Website</Header>
                                <Text color="secondary">Add description</Text>


                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" className="open-external">
                                    <g clipPath="url(#clip0)">
                                        <path
                                            d="M10.125 8H9.375C9.27554 8 9.18016 8.03951 9.10983 8.10983C9.03951 8.18016 9 8.27554 9 8.375V11H1.5V3.5H4.875C4.97446 3.5 5.06984 3.46049 5.14016 3.39016C5.21049 3.31984 5.25 3.22446 5.25 3.125V2.375C5.25 2.27554 5.21049 2.18016 5.14016 2.10984C5.06984 2.03951 4.97446 2 4.875 2H1.125C0.826631 2 0.540483 2.11853 0.329505 2.3295C0.118526 2.54048 0 2.82663 0 3.125L0 11.375C0 11.6734 0.118526 11.9595 0.329505 12.1705C0.540483 12.3815 0.826631 12.5 1.125 12.5H9.375C9.67337 12.5 9.95952 12.3815 10.1705 12.1705C10.3815 11.9595 10.5 11.6734 10.5 11.375V8.375C10.5 8.27554 10.4605 8.18016 10.3902 8.10983C10.3198 8.03951 10.2245 8 10.125 8ZM11.4375 0.5H8.4375C7.93664 0.5 7.68633 1.10727 8.03906 1.46094L8.87648 2.29836L3.16406 8.00867C3.11162 8.06093 3.07001 8.12303 3.04162 8.1914C3.01323 8.25977 2.99862 8.33308 2.99862 8.40711C2.99862 8.48114 3.01323 8.55445 3.04162 8.62282C3.07001 8.69119 3.11162 8.75329 3.16406 8.80555L3.69539 9.33594C3.74765 9.38838 3.80974 9.42999 3.87812 9.45838C3.94649 9.48677 4.0198 9.50138 4.09383 9.50138C4.16786 9.50138 4.24117 9.48677 4.30954 9.45838C4.37791 9.42999 4.44001 9.38838 4.49227 9.33594L10.2019 3.62469L11.0391 4.46094C11.3906 4.8125 12 4.56641 12 4.0625V1.0625C12 0.913316 11.9407 0.770242 11.8352 0.664752C11.7298 0.559263 11.5867 0.5 11.4375 0.5V0.5Z"
                                            fill="#2D71B4"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <a className="url" href="/demo">https://mytime.fitness.abcfitness.dev</a>
                            </div>
                            <div>
                                <Button mode="secondary" rounded>Settings</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button mode="primary" rounded
                                        onClick={() => this.setState({modal: true})}><IconPlus/> Create New
                                    Page</Button>
                            </div>
                        </Card>
                        <Card abcId="content2" shadow={false} className="content content2">
                            <EmptyStateIcon/>

                            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                                <Header as="h2">Create your first Page</Header>
                                <Text>Start adding pages for your new website. Use a ready-made template to add
                                    content</Text>

                                <Button mode="primary" rounded style={{marginTop: 50, width: 220}}
                                        onClick={() => this.setState({modal: true})}><IconPlus/> Create New
                                    Page</Button>
                            </div>
                        </Card></div>

                    <Modal abcId="" open={this.state.modal} title="Create New Page" contentClassName="dashboard-modal"
                           onClose={() => this.setState({modal: false})}>
                        <Modal.Body abcId="">
                            <Text color="secondary">Choose a suitable template and customize it to fit your purposes and
                                ideas.</Text></Modal.Body>

                        <ElasticGrid abcId="" displayData={templates} labelledBy="" minimalColumnWidth="416px"
                                     renderItem={item => (
                                         <Card abcId="" className="template">
                                             <Button abcId="" mode="secondary" size="small" className="preview">
                                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                      xmlns="http://www.w3.org/2000/svg">
                                                     <path
                                                         d="M6.58965 6.58965C6.96397 6.21533 7.47065 6.00349 8 6C9.094 6 10 6.906 10 8C10 9.09467 9.094 10 8 10C6.90533 10 6 9.09467 6 8C6.00349 7.47065 6.21533 6.96397 6.58965 6.58965Z"
                                                         fill="#2D71B4"/>
                                                     <path fill-rule="evenodd" clip-rule="evenodd"
                                                           d="M1.0738 7.77429C1.08842 7.72643 2.6856 3 8 3C13.3144 3 14.9116 7.72643 14.9269 7.77429L15 8L14.9262 8.22571C14.9116 8.27357 13.3144 13 8 13C2.6856 13 1.08842 8.27357 1.07311 8.22571L1 8L1.0738 7.77429ZM2.4816 8C2.83111 8.82429 4.27442 11.5714 8 11.5714C11.7235 11.5714 13.1675 8.82714 13.5184 8C13.1689 7.17571 11.7256 4.42857 8 4.42857C4.27651 4.42857 2.8325 7.17286 2.4816 8Z"
                                                           fill="#2D71B4"/>
                                                 </svg>
                                             </Button>
                                             <img src={item.image} alt=""/>
                                             <div className="footer">
                                                 <h3>{item.name}</h3>
                                                 <Button mode="transparent">SELECT</Button>
                                             </div>
                                         </Card>
                                     )}>
                        </ElasticGrid>
                    </Modal>

                </Layout.Content>
            </Layout>


        );
    }
}


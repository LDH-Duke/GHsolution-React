import dev from './img/dev.svg'
import gs from './img/gs.svg'
import edu from './img/edu.svg'
import research from './img/research.svg'

let data = [
    {
        intro_service: [
            {
                icon: (width, height) => (<svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 24 24" width={width} fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>),
                title: "Education",
                content: "기업 및 초·중·고 학생을 대상으로 필요한 SW교육을 지원합니다.",
                img: edu,
                url: 'edu'
            },
            {
                icon: (width, height) => (<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height={height} viewBox="0 0 24 24" width={width} fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M7,19c-1.1,0-2,0.9-2,2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1,0,2-0.9,2-2h-8c-1.66,0-3-1.34-3-3c0-1.09,0.59-2.04,1.46-2.56 C8.17,9.03,8,8.54,8,8c0-0.21,0.04-0.42,0.09-0.62C6.28,8.13,5,9.92,5,12c0,2.76,2.24,5,5,5v2H7z" /><path d="M10.56,5.51C11.91,5.54,13,6.64,13,8c0,0.75-0.33,1.41-0.85,1.87l0.59,1.62l0.94-0.34l0.34,0.94l1.88-0.68l-0.34-0.94 l0.94-0.34L13.76,2.6l-0.94,0.34L12.48,2L10.6,2.68l0.34,0.94L10,3.97L10.56,5.51z" /><circle cx="10.5" cy="8" r="1.5" /></g></g></svg>),
                title: "Rearch",
                content: "인공지능, 빅데이터 등 최신 기술들을 활용한 연구를 수행합니다.",
                img: research,
                url: 'research'
            },
            {
                icon: (width, height) => (<svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 24 24" width={width} fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>),
                title: "Development",
                content: "소프트웨어는 잘 모르지만 아이디어만 있는 경우 구현에서 아이디어 기획부터 함께 진행하며 프로토타입을 통해 아이템의 가능성을 보여드립니다.",
                img: dev,
                url: 'dev'
            },
            {
                icon: (width, height) => (<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height={height} viewBox="0 0 24 24" width={width} fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g /><path d="M12,3c-0.46,0-0.93,0.04-1.4,0.14C7.84,3.67,5.64,5.9,5.12,8.66c-0.48,2.61,0.48,5.01,2.22,6.56C7.77,15.6,8,16.13,8,16.69 V19c0,1.1,0.9,2,2,2h0.28c0.35,0.6,0.98,1,1.72,1s1.38-0.4,1.72-1H14c1.1,0,2-0.9,2-2v-2.31c0-0.55,0.22-1.09,0.64-1.46 C18.09,13.95,19,12.08,19,10C19,6.13,15.87,3,12,3z M14,19h-4v-1h4V19z M14,17h-4v-1h4V17z M12.5,11.41V14h-1v-2.59L9.67,9.59 l0.71-0.71L12,10.5l1.62-1.62l0.71,0.71L12.5,11.41z" /></g></svg>),
                title: "GS인증 컨설팅 ",
                content: "GS(Good Software)인증 획득 시간을 줄일 수 있도록\n GS인증 전문가가 컨설팅 해드립니다.",
                img: gs,
                url: 'consulting'
            },

        ]
    },
    {
        footer: [
            {
                en_title: "Guhyeon Solution Co., Ltd",
                kr_title: "(주)구현솔루션",
                name: "최봉준",
                address: "부산광역시 사상구 주례로 47, 동서대학교 뉴밀레니엄관 1004호",
                tel: "051-320-4288",
                email: "bongjun.choi@dongseo.ac.kr"
            }
        ]
    },
    {
        members: [
            {
                img: '',
                name: '최봉준',
                position: '대표',
                degree: '동서대학교 컴퓨터정보공학부 학사',
                mas_degree: '연세대학교 컴퓨터과학 석사',
                career: '현 동서대학교 소프크웨어융합대학 조교수',
                career1: 'LG전자 CTO부문 인공지능연구소 선임연구원',
                career2: 'Denmark Aalborg University Operation Research Lab Research Assistant',
            },
            {
                img: '',
                name: '최봉준',
                position: '대표',
                degree: '동서대학교 컴퓨터정보공학부 학사',
                mas_degree: '연세대학교 컴퓨터과학 석사',
                career: '현 동서대학교 소프크웨어융합대학 조교수',
                career1: 'LG전자 CTO부문 인공지능연구소 선임연구원',
                career2: 'Denmark Aalborg University Operation Research Lab Research Assistant',
            },
            {
                img: '',
                name: '최봉준',
                position: '대표',
                degree: '동서대학교 컴퓨터정보공학부 학사',
                mas_degree: '연세대학교 컴퓨터과학 석사',
                career: '현 동서대학교 소프크웨어융합대학 조교수',
                career1: 'LG전자 CTO부문 인공지능연구소 선임연구원',
                career2: 'Denmark Aalborg University Operation Research Lab Research Assistant',
            },
            {
                img: '',
                name: '최봉준',
                position: '대표',
                degree: '동서대학교 컴퓨터정보공학부 학사',
                mas_degree: '연세대학교 컴퓨터과학 석사',
                career: '현 동서대학교 소프크웨어융합대학 조교수',
                career1: 'LG전자 CTO부문 인공지능연구소 선임연구원',
                career2: 'Denmark Aalborg University Operation Research Lab Research Assistant',
            },
        ]
    },
    {
        panel: [
            {
                img: '',
                company: '코드브루잉',
                name: '김성훈',
                position: '대표',
                field: '개발'
            },
            {
                img: '',
                company: '코드브루잉',
                name: '김성훈',
                position: '대표',
                field: '개발'
            },
            {
                img: '',
                company: '코드브루잉',
                name: '김성훈',
                position: '대표',
                field: '개발'
            },
            {
                img: '',
                company: '코드브루잉',
                name: '김성훈',
                position: '대표',
                field: '개발'
            },


        ]
    },
    {
        nav: [
            { edu: 'Education.', research: 'Research.', dev: 'Development.', consulting: 'Consulting.' },

        ]
    },
    {
        ent_card: [
            {
                img: '',
                name: 'DataBase',
                explain: '(주)구현솔루션은 기업을 대상으로 Database 교육을 제공합니다.'
            },
            {
                img: '',
                name: 'DataBase',
                explain: '(주)구현솔루션은 기업을 대상으로 Database 교육을 제공합니다.'
            },
            {
                img: '',
                name: 'DataBase',
                explain: '(주)구현솔루션은 기업을 대상으로 Database 교육을 제공합니다.'
            },
        ]
    },
    {
        componentData: [
            {
                name: 'home',
                sections: {
                    'Main': 650,
                    'Introduction': 645,
                    'service': 745
                }
            },
            {
                name: 'about',
                sections: {
                    'Main': 963,
                    'Introduction': 963,
                    'Members': 1500,
                    'panels': 963
                }
            },
        ]
    },
    {
        GStarget: [
            "패키지", "모바일", "임베디드", "컴포넌트", "게임", "GIS", "e-Biz", "e-Learning", "주문형(SI) SW",
            "운영체제", "디지털 콘텐츠", "보안용SW", "웹관리 도구", "SW개발도구", "유틸리티", "홈네트워크", "스토리지", "바이오 메트릭스", "교육용SW"
        ],
        Procedure: [
            {
                icon: (width, height) => (<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height={height} viewBox="0 0 24 24" width={width} fill="#535353"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M5,5h2v3h10V5h2v6h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h5v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z" /><polygon points="18.01,13 16.59,14.41 18.17,15.99 12,15.99 12,17.99 18.17,17.99 16.59,19.58 18.01,20.99 22,16.99" /></g></g></svg>),
                title: '현황진단 및 개선 사항 도출',
                contents: ['GS인증 범위 선정 가이드', '제품분석 및 현황 진단', '문서평가(제품 메뉴얼, 사용자 가이드)', '문서 작성 가이드(문서 평가 기록서 기반)', '문서 개선 사항 도출']
            },
            {
                icon: (width, height) => (<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height={height} viewBox="0 0 24 24" width={width} fill="#535353"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M5,5h2v3h10V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h5v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z" /><path d="M20.3,18.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S12,14,12,16.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l2.7,2.7 l1.4-1.4L20.3,18.9z M16.5,19c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5C19,17.9,17.9,19,16.5,19z" /></g></g></svg>),
                title: '수행 사항 점검',
                contents: ['문서 개선 작업 결과 리뷰', '문서 추가 개선 사항 가이드']
            },
            {
                icon: (width, height) => (<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height={height} viewBox="0 0 24 24" width={width} fill="#535353"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M5,5h2v3h10V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h6v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z" /><polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13" /></g></g></svg>),
                title: '준비 상태 점검',
                contents: ['최종 문서 평가 / 샘플 테스트 수행', 'GS인증 품질 평가 방법 소개', '결함 관리 프로세스 점검', '테스트 산출물 작성지원', '제품 개선 사항 조언']
            }
        ]
    },
    {
        ent_edu_portfolio: [
            {
                img: '',
                title: '기업 교육',
                contents: '데이터 베이스'
            },
            {
                img: '',
                title: '기업 교육',
                contents: '데이터 베이스'
            }, {
                img: '',
                title: '기업 교육',
                contents: '데이터 베이스'
            }, {
                img: '',
                title: '기업 교육',
                contents: '데이터 베이스'
            }, {
                img: '',
                title: '기업 교육',
                contents: '데이터 베이스'
            }, {
                img: '',
                title: '기업 교육',
                contents: '데이터 베이스'
            }, {
                img: '',
                title: '기업 교육',
                contents: '데이터 베이스'
            }, {
                img: '',
                title: '기업 교육',
                contents: '데이터 베이스'
            }, {
                img: '',
                title: '기업 교육',
                contents: '데이터 베이스'
            }, {
                img: '',
                title: '기업 교육',
                contents: '데이터 베이스'
            },
        ],
        stu_edu_portfolio: [
            {
                img: '',
                title: '학생 교육',
                contents: '아두이노'
            },
            {
                img: '',
                title: '학생 교육',
                contents: '아두이노'
            },
            {
                img: '',
                title: '학생 교육',
                contents: '아두이노'
            },
            {
                img: '',
                title: '학생 교육',
                contents: '아두이노'
            },
            {
                img: '',
                title: '학생 교육',
                contents: '아두이노'
            },
            {
                img: '',
                title: '학생 교육',
                contents: '아두이노'
            },
            {
                img: '',
                title: '학생 교육',
                contents: '아두이노'
            },
        ]
    },
    {
        research: [
            {
                icon: () => (<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#205bff"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" /></svg>),
                title: '연구 아이디어 회의',
                contents: '연구를 위한 아이디어 회의를 진행하여 연구 방향을 설정합니다.'
            },
            {
                icon: () => (<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#205bff"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2v2z" /></svg>),
                title: '연구 방법 설정',
                contents: '설정한 연구 컨셉에 맞는 연구 방향을 설정합니다.'
            },
            {
                icon: () => (<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#205bff"><path d="M.01 0h24v24h-24z" fill="none" /><path d="M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15c0 1.11-.9 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4c1.1 0 2 .89 2 2v1.5z" /></svg>),
                title: '연구 진행 점검',
                contents: '진행 중인 연구를 점검하고 진행 연구에 추가적인 연구 사항이 있는지 확인합니다. '
            },
            {
                icon: () => (<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#205bff"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z" /></svg>),
                title: '연구 결과',
                contents: '최종적으로 도출된 연구 결과를 점검하고 연구결과에 대한 성과를 얻을 수 있도록 도와드립니다.'
            },
        ],
        research_portfolio: [
            {
                name: '프로젝트 명',
                contents: '프로젝트에 대한 간략한 연구소개입니다.'
            },
            {
                name: '프로젝트 명',
                contents: '프로젝트에 대한 간략한 연구소개입니다.'
            },
            {
                name: '프로젝트 명',
                contents: '프로젝트에 대한 간략한 연구소개입니다.'
            },

        ]
    }

]


export default data
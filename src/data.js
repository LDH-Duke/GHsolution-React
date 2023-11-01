import dev from './img/dev.svg'
import gs from './img/gs.svg'
import edu from './img/edu.svg'
import research from './img/research.svg'

let data = [
    {
        intro_service: [
            {
                title: "Education",
                content: "기업 및 초·중·고 학생을 대상으로 필요한 SW교육을 지원합니다.",
                img: edu,
                url: 'edu'
            },
            {
                title: "Rearch",
                content: "인공지능, 빅데이터 등 최신 기술들을 활용한 연구를 수행합니다.",
                img: research,
                url: 'research'
            },
            {
                title: "Development",
                content: "소프트웨어는 잘 모르지만 아이디어만 있는 경우 구현에서 아이디어 기획부터 함께 진행하며 프로토타입을 통해 아이템의 가능성을 보여드립니다.",
                img: dev,
                url: 'dev'
            },
            {
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
                explain: '(주)구현솔루션은 기업의 직원들을 대상으로 Database 교육을 제공합니다.'
            },
            {
                img: '',
                name: 'DataBase',
                explain: '(주)구현솔루션은 기업의 직원들을 대상으로 Database 교육을 제공합니다.'
            },
            {
                img: '',
                name: 'DataBase',
                explain: '(주)구현솔루션은 기업의 직원들을 대상으로 Database 교육을 제공합니다.'
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
                icon: () => (<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="80px" viewBox="0 0 24 24" width="80px" fill="#535353"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M5,5h2v3h10V5h2v6h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h5v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z" /><polygon points="18.01,13 16.59,14.41 18.17,15.99 12,15.99 12,17.99 18.17,17.99 16.59,19.58 18.01,20.99 22,16.99" /></g></g></svg>),
                title: '현황진단 및 개선 사항 도출',
                contents: ['GS인증 범위 선정 가이드', '제품분석 및 현황 진단', '문서평가(제품 메뉴얼, 사용자 가이드)', '문서 작성 가이드(문서 평가 기록서 기반)', '문서 개선 사항 도출']
            },
            {
                icon: () => (<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="80px" viewBox="0 0 24 24" width="80px" fill="#535353"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M5,5h2v3h10V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h5v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z" /><path d="M20.3,18.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S12,14,12,16.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l2.7,2.7 l1.4-1.4L20.3,18.9z M16.5,19c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5C19,17.9,17.9,19,16.5,19z" /></g></g></svg>),
                title: '수행 사항 점검',
                contents: ['문서 개선 작업 결과 리뷰', '문서 추가 개선 사항 가이드']
            },
            {
                icon: () => (<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="80px" viewBox="0 0 24 24" width="80px" fill="#535353"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M5,5h2v3h10V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h6v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z" /><polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13" /></g></g></svg>),
                title: '준비 상태 점검',
                contents: ['최종 문서 평가 / 샘플 테스트 수행', 'GS인증 품질 평가 방법 소개', '결함 관리 프로세스 점검', '테스트 산출물 작성지원', '제품 개선 사항 조언']
            }
        ]
    },
    {
        ent_edu_portfolio:[
            {
                img:'',
                title:'삼성 DB 교육',
                contents:'삼성전자 직원 교육'
            },
            {
                img:'',
                title:'삼성 DB 교육',
                contents:'삼성전자 직원 교육'
            },
            {
                img:'',
                title:'삼성 DB 교육',
                contents:'삼성전자 직원 교육'
            },
            {
                img:'',
                title:'삼성 DB 교육',
                contents:'삼성전자 직원 교육'
            },
            {
                img:'',
                title:'삼성 DB 교육',
                contents:'삼성전자 직원 교육'
            },
        ]
    }

]


export default data
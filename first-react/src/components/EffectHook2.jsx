import React,{useEffect, useState} from 'react'

export default function EffectHook2() {
    // useEffect를 사용해서 useState의 비동기 값을
    // 다른 useState에 담아오는 방법 확인
    const [name,setName] = useState("홍길동")
    const [age,setAge] = useState(29)
    const [profile,setProfile] = useState({
        name : "홍길동",
        age : 29
    })

    // 공공데이터를 담을 공간 (state)
    const [menuList, setMenuList] = useState([])
    // 공공데이터 요청 후 그 값이 들어왔을 때, 확인할 값
    const [loading,setLoading] = useState(false)

    // name 값이 수정되었을 떄, 다른 값도 함께 수정
    // 1. setName 먼저 실행
    // 2. useEffect(()=>{},[name])의 함수가 실행
    useEffect(()=>{
        setProfile({...profile,name})
    },[name])

    // age 바뀌었을 때 profile의 age 값 수정하는 useEffect
    // 보통은 버튼을 눌렀을 때 그 값이 들어감
    // 지금은 연습을 위해 함께 바꾸고있습니다
    // 출력 방식은 name과 동일하게 작성
    useEffect(()=>{
        setProfile({...profile,age})
    },[age])

    // 컴포넌트가 생성이 되었을 때 공공데이터 가져옴
    // await를 사용할 떄 async를 이용하여 비동기 함수로 작성
    const getMenu = async()=>{
        const promise = await fetch("https://busan-food.openapi.redtable.global/api/menu-dscrn/korean?serviceKey=ktUxlKytZlqjfiuEVKgUJRs89UYf5jhCWaGrOP8n02R9PKJi9cKQcH1nvwTE2Uuo");
        const response = await promise.json();
        console.log(response.body);
        setMenuList(response.body)
    }
    // useEffect의 함수 자체에는 async를 붙일 수 없음
    // 값을 가져오는 비동기 함수를 따로 작성한 후 호출하여 사용
    useEffect(()=>{
        // 컴포넌트를 생성할 때 바로 호출해서 사용
        getMenu()
        // getMenu()는 비동기, 아래 작성한 코드는 바로 실행
    },[])
    
    useEffect(()=>{
        // menuList 처음 값이 빈 값으로 들어감
        // 빈 값이 아닌 값이 들어갔을 때 화면에 출력
        if(menuList.length>0){
            // 값이 들어왔다면 true로 바꿔서 화면 출력
            setLoading(true)
        }
    },[menuList])


    return (
        <div>
            <p>useState의 값은 비동기로 저장(실행 순서대로 저장되지 않음)</p>
            <label htmlFor="">이름</label>
            <input type="text"
                onChange={(e)=> {
                    // name의 값을 바꿔줌
                    setName(e.target.value)
                    // name 안에 들어가 있는 값을 profile에 전달
                    // setProfile({...profile,name:name})과 동일
                    // name = "값" 즉, 변수와 값이 객체의 속성과 값으로 동일
                    setProfile({...profile,name})
                    // 같은 이벤트에서 set을 이용하여 수정한 state값을 가져오려 하면
                    // 이전 값을 가져온다. (현재 바로 수정한 값 접근 X)
                    // -> useEffect의 두번쨰 값[]에 name 값을 넣어서 값이 바뀌었을 때
                    // setProfile이 실행되게 수정
                }}
            />
            <h4>name : {name},profile의 name : {profile.name}</h4>
            <label htmlFor="">나이</label>
            <input type="text"
                onChange={(e)=>{setAge(parseInt(e.target.value))}}
            />
            <h4>age : {age}, profile age : {profile.age}</h4>

            <hr />
            <p>공공데이터로 가져온 값 : {loading && menuList[0].MENU_NM}</p>
        </div>
    )
}


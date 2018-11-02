import React from 'react';


class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let {data}=this.props
        console.log(data)
        return <div className='cont'>
                    <div className='title'>
                                    <dl>
                                        <dt><i className="icon iconfont icon-fangdajing"></i></dt>
                                        <dd>
                                            找攻略
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><i className="icon iconfont icon-fangdajing"></i></dt>
                                        <dd>
                                            找攻略
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><i className="icon iconfont icon-fangdajing"></i></dt>
                                        <dd>
                                            找攻略
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><i className="icon iconfont icon-fangdajing"></i></dt>
                                        <dd>
                                            找攻略
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><i className="icon iconfont icon-fangdajing"></i></dt>
                                        <dd>
                                            找攻略
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><i className="icon iconfont icon-fangdajing"></i></dt>
                                        <dd>
                                            找攻略
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><i className="icon iconfont icon-fangdajing"></i></dt>
                                        <dd>
                                            找攻略
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><i className="icon iconfont icon-fangdajing"></i></dt>
                                        <dd>
                                            找攻略
                                        </dd>
                                    </dl>
                  </div>
                  <div className="hot">
                   
                    {
                        data.length>0&&data.map((item,ind)=>{
                            console.log(item)
                         return  <div className="hot_text" key={ind}>
                                    <h5>{item.data.title}</h5>
                                    <dl>
                                        <dt>
                                            <img src={item.data.image} alt=""/>
                                        </dt>
                                        <dd>
                                            {item.data.content}
                                        </dd>
                                    </dl>
                           </div> 
                        })
                    }
            </div>
        </div>
    }
}
export default Main
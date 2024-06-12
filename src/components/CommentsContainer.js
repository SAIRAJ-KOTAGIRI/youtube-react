import React from 'react'
import Comment from './Comment'

const commentsData = [
    {
        name: "sai raj",
        text: "Lorem ipsum dolor sit amet, consecteuor adip",
        replies: [
            {
                name: "sai raj1",
                text: "Lorem ipsum dolor sit amet, consecteuor adip",
                replies: [
                    {
                        name: "sai raj2",
                        text: "Lorem ipsum dolor sit amet, consecteuor adip",
                        replies: [
                            {
                                name: "sai raj3",
                                text: "Lorem ipsum dolor sit amet, consecteuor adip",
                                replies: [
                                    {
                                        name: "sai raj2",
                                        text: "Lorem ipsum dolor sit amet, consecteuor adip",
                                        replies: [
                                            {
                                                name: "sai raj3",
                                                text: "Lorem ipsum dolor sit amet, consecteuor adip",
                                                replies: [
                                                    {
                                                        name: "sai raj2",
                                                        text: "Lorem ipsum dolor sit amet, consecteuor adip",
                                                        replies: [
                                                            {
                                                                name: "sai raj3",
                                                                text: "Lorem ipsum dolor sit amet, consecteuor adip",
                                                                replies: [
                                                                    
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name: "sai raj12",
                                                        text: "Lorem ipsum dolor sit amet, consecteuor adip",
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "sai",
        text: "Lorem ipsum dolor sit amet, consecteuor adip",
    }
]

const CommentsList = ({comments}) => {
    return comments?.map((comment, index) => (
            <div key={index}>
                <Comment  data={comment} />
                <div className='pl-5 border border-l-black ml-5'>
                    <CommentsList comments={comment.replies}/>
                </div>
            </div>
        ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-xl'>
            {<CommentsList comments={commentsData}/>}
        </h1>
    </div>
  )
}

export default CommentsContainer
export default function Post({ markup }) { 

  return <>
    <div dangerouslySetInnerHTML={{ __html: markup }}>

    </div>
  </>
}
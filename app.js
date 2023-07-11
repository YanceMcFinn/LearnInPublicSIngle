function Body() {
  const [addProfileInst, setAddProfileInst] = React.useState("addProfInvis") 
  return (
      <main>

          <div className="container-fluid">
            <div className="row mt-5 px-5 mb-2 test">
              <div className="col-md-8">
              <span className="text-secondary"><h1 class="heading"><i className="fa-solid fa-graduation-cap"></i> Learn In Public</h1></span>
                <p>Learning to code is hard, why do it alone? Share your profile, accomplishments and frustrations with the rest of the 4Geeks community!</p>
              </div>
              <div className="col-md-4">
                <button className="btn w-100 py-2 whiteBtn" onClick={()=>setAddProfileInst("addProfVis")}><span className="lrgBtnText"><i className="fa-solid fa-circle-plus text-success"></i> Add yourself to this list</span></button>
                <button className="btn btn-primary w-100 py-2 mt-2"><span className="lrgBtnText"><i className="fa-solid fa-share-nodes"></i> Share Your commitment</span></button>
              </div>
              <div>
                <a href="https://www.100daysofcode.com/" target="_blank"><button className="btn btn-sm btn-dark">100DaysOfCode.com</button></a>
                <a href="https://www.swyx.io/learn-in-public" target="_blank"><button className="btn btn-sm btn-dark mx-2">Why Learn in Public</button></a>
                <a href="https://twitter.com/search?q=%23100DaysOfCode" target="_blank"><button className="btn btn-sm btn-dark">#100DaysOfCode</button></a>
              </div>
            </div>
            <div className={`row px-5 rounded addProfInstructions ${addProfileInst}`}>
              <h3 className="text-secondary mt-3 heading">How can you add yourself to this list?</h3>
                <div>
                  <h4 className="mb-0 text-secondary"><i class="fa-solid fa-1"></i> Create a student YML</h4>
                  <p class="pl-4">The student information is stored in <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=cdLNKUoMc6c">YML format</a> inside <a href="https://github.com/4GeeksAcademy/About-4Geeks-Academy/tree/master/site/resumes" rel="noopener noreferrer" target="_blank">this folder</a>, you have to copy the file content and adapt to your own information, use <a href="https://github.com/4GeeksAcademy/About-4Geeks-Academy/blob/master/site/resumes/example.yml" rel="noopener noreferrer" target="_blank">this YML</a> as an example.</p>
                </div>
                <div>
                <h4 className="mb-0 text-secondary"><i class="fa-solid fa-2"></i> Validate your YML</h4>
                  <p class="pl-4">Before submiting your YML, validate the content using this tool: <a href="http://www.yamllint.com/" rel="noopener noreferrer" target="_blank">Yaml Lint</a></p>
                </div>
                <div>
                <h4 className="mb-0 text-secondary"><i class="fa-solid fa-3"></i> Create a Pull Request (PR)</h4>
                  <p class="pl-4">Fork <a href="https://github.com/4GeeksAcademy/About-4Geeks-Academy">this repository</a> and create your student file under the resumes folder </p>                
                </div>
                <div>
                <h4 className="mb-0 text-secondary"><i class="fa-solid fa-4"></i> Wait for it!</h4>
                  <p class="pl-4">It takes a few minutes to complete, you can follow the status on your pull request conversation, you can also check if your commit is showing alreading on the main repository <a target="_blank" rel="noopener noreferrer" href="https://github.com/4GeeksAcademy/student-external-profile/commits/master">commits history</a> and your pull request should have a ✅ green check on the <a target="_blank" rel="noopener noreferrer" href="https://github.com/4GeeksAcademy/About-4Geeks-Academy/actions?query=workflow%3A%22Testing+for+Errors%22"> repository list of completed actions</a>.</p>                
                </div>
              <button className="btn btn-primary mb-3" onClick={()=>setAddProfileInst("addProfInvis")}>Close these instructions</button>
            </div>
            <div className="row mt-4 px-5 test">
              <input type="text" className="w-100 form-control mb-3" placeholder="Type student name to search"></input>
            </div>
              {/* Button trigger modal  */}
              {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
              </button> */}
              {/* Modal */}
              {/* <div className="modal" id="exampleModal" tabIndex="-1">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row test justify-content-center px-5">
                <StudentListing name="Smitty Werbenjaegermanjansen" motto="he was #1" portfolioUrl="http://github.com" linkedIn="steve" gitHub="yancemcfinn"/>
                <StudentListing name="Elongated Muskrat" motto="sdibdsgdsgub"  twitter="elonmusk"/>
              </div>
          </div>
      </main>
    );
  }

  function App() {
    return (
      <div>
        <Body />
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'));

  function StudentListing (props){
    
    return (
        <div className="studentRow row mx-2 p-1 ">
            <div className="col-md-6 float-md-start text-secondary d-inline-block">
                <p id="studentName">{props.name}</p>
                <p id="motto">{props.motto}</p>
            </div>
            <div className="col-md-6 float-md-end d-flex align-items-start justify-content-end py-2">
                {props.portfolioUrl && props.portfolioUrl != undefined ? <a href={props.portfolioUrl} target="_blank"><button className="btn whiteBtn mx-1"><i className="fa-solid fa-palette"></i> Portfolio</button></a> : null}
                {props.twitter && props.twitter != undefined ? <a href={`https://twitter.com/${props.twitter}`} target="_blank"><button className="btn whiteBtn mx-1"><i className="fa-brands fa-twitter" id="linkBtnIcon"></i></button></a> : null}
                {props.linkedIn && props.linkedIn != undefined ? <a href={`https://linkedin.com/${props.linkedIn}`} target="_blank"><button className="btn whiteBtn mx-1"><i className="fa-brands fa-linkedin" id="linkBtnIcon"></i></button></a> : null}
                <button className="btn whiteBtn mx-1"><i className="fa-solid fa-file"></i> HTML</button>
                <button className="btn whiteBtn mx-1"><i className="fa-solid fa-file-pdf"></i> PDF</button>
                {props.gitHub && props.gitHub != undefined ? <a href={`https://github.com/${props.gitHub}`} target="_blank"><button className="btn whiteBtn mx-1"><i className="fa-brands fa-github" id="linkBtnIcon"></i></button></a> : null}
            </div>
        </div>
    )
}
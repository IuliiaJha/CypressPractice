describe ("My first cypress test", () =>{
   it ("true showld be true", ()=>{
       expect(true).to.equal(false)
   })
      it ('5 should be 5', ()=>{
       expect(5).to.equal(5)
   })  
})

describe ('Another describe block', ()=>{
    it ('false should be false', ()=>{
expect(false).to.equal(false)
  })
})
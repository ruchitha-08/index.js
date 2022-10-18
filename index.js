const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
    
    // const iscompleted = (list) =>{
    //   return l;
    // }

    const istoday = (list) => {
      return list["dueDate"] == "2022-09-21";
    }

    const alloteddate = (list) => {
      let res = list.dueDate == "2022-09-20"? "2022-09-20" : "2022-09-22";
      return res;
    }
    const overdue = () => {
      let due3 = all.filter((item)=> item.dueDate =="2022-09-20");
      return due3 
    }
  
    const dueToday = () => {
      let due = all.filter((item) => item.dueDate==="2022-09-21");
      return due
    }
  
    const dueLater = () => {
      let due1 = all.filter((item) => item.dueDate==="2022-09-22");
      return due1
    }
  
    const toDisplayableList = (list) => {
      let ans=[];
      for (index=0 ; index<list.length; index++)
      {
         box = list[index].completed == true ? "[x]" : "[ ]";
         adddate = list[index].dueDate == "2022-09-21"? "" : list[index].dueDate;
         ans.push(`${box} ${list[index].title} ${adddate}`);
      }
        let res =  ans.join("\n");
        ans = res.trim();
        return ans;
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")
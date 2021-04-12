## React Race 

Sample react project to show how racing condiiton can be handled in JS


Racing is a condition in which multiple asynchronous calls do not complete in the order in which they were issued. In such a case,  its quiet possible that stale data ends up showing on the pages. 
We use the react useEffect's clean up function to handle such a  case. 
We also look at AbortController to handle this 

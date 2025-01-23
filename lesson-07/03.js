function truncate(str, maxLength) {  
    
    if (str.length > maxLength) {  
        // Возвращаем обрезанную строку с многоточием  
        return str.slice(0, maxLength - 3) + '...'; 
    }  
   
    return str;  
}  

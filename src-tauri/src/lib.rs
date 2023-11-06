pub mod functions {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    #[tauri::command]
    pub fn calculate(query: &str) -> Result<String, String>{
        if false {
            Err("Some Error".into())
        } else {
            Ok(format!("Hello {} !", query).into())
        }
    }
}

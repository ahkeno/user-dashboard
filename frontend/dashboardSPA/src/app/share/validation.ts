export const validateUser = (data:any) => {
      if (
        typeof data.id !== "number" ||
        typeof data.name !== "string" ||
        typeof data.email !== "string"||
        typeof data.profile_picture_url !== "string"||
        typeof data.email_verified_at !== "string"||
        typeof data.identification_number !== "string"||
        typeof data.current_organisation.id !== "number"||
        typeof data.current_organisation.is_personal !== "boolean"||
        typeof data.current_organisation.logo_url !== "string"||
        typeof data.current_organisation.name !== "string"
        
      )
        return false;
    
    return true;
  };
  
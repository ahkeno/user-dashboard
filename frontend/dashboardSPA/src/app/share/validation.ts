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
  export const validateDocument = (items:any) => {
    for (const data of items) {
    if (
      typeof data.id !== "number" ||
      typeof data.status !== "string" ||
      typeof data.document_name !== "string"||
      typeof data.issuer_name !== "string"||
      typeof data.issuer_logo_url !== "string"||
      typeof data.recipient_name !== "string"||
      typeof data.created_at !== "string"||
      typeof data.updated_at !== "string"
    )
      return false;
    }
  return true;
};
  
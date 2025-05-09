/**
 * Utility to validate environment variables
 */

/**
 * Validates client-side EmailJS environment variables
 * @returns {Object} Object containing validation results
 */
export function validateClientEmailJSEnv() {
  const variables = {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    confirmTemplateId: process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_TEMPLATE_ID
  };

  const missing = Object.entries(variables)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  return {
    isValid: missing.length === 0,
    missing,
    variables: {
      publicKeyExists: !!variables.publicKey,
      serviceIdExists: !!variables.serviceId,
      templateIdExists: !!variables.templateId,
      confirmTemplateIdExists: !!variables.confirmTemplateId
    }
  };
}

/**
 * Validates server-side EmailJS environment variables
 * @returns {Object} Object containing validation results
 */
export function validateServerEmailJSEnv() {
  const variables = {
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY,
    serviceId: process.env.EMAILJS_SERVICE_ID,
    templateId: process.env.EMAILJS_TEMPLATE_ID,
    confirmTemplateId: process.env.EMAILJS_CONFIRM_TEMPLATE_ID
  };

  const missing = Object.entries(variables)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  return {
    isValid: missing.length === 0,
    missing,
    variables: {
      publicKeyExists: !!variables.publicKey,
      privateKeyExists: !!variables.privateKey,
      serviceIdExists: !!variables.serviceId,
      templateIdExists: !!variables.templateId,
      confirmTemplateIdExists: !!variables.confirmTemplateId
    }
  };
}
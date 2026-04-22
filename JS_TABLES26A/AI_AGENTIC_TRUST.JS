// AI_AGENTIC_TRUST.js

window.AI_AGENTIC_TRUST = {
  "tables": {
    "AI_AGENTIC_TRUST": {
      "description": "Trust relationship between OTM and an Agentic AI provider.",
      "columns": {
        "AI_AGENTIC_TRUST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "AI Agentic Trust GID."
},
        "AI_AGENTIC_TRUST_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "AI Agentic Trust XID."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "CLIENT_ID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The client ID for the agentic confidential application for OTM/GTM."
},
        "CLIENT_KID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The cryptographic key ID, identifying the key signing the OAUTH JWT request in the agentic confidential application. For AI Studio, use the certificate alias int the Fusion IDCS confidential application for OTM/GTM."
},
        "SIGNING_PRIVATE_KEY": {
          "type": "VARCHAR2(16000)",
          "nullable": true,
          "info": "Private key to sign JWT token payloads. Must match public key registered with the agentic confidential application for OTM/GTM."
},
        "SIGNING_ALGORITHM": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
                    "RS256",
                    "ES256",
                    "HS256"
          ],
          "info": "Signing algorithm for OAUTH JWT token payloads."
},
        "SIGNING_CERTIFICATE": {
          "type": "VARCHAR2(16000)",
          "nullable": true,
          "info": "Certificate used to validate return JWT access tokens."
},
        "IDCS_TOKEN_URL": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "IDCS URL for agentic AI authentication requests."
},
        "AUDIENCE": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Audience for AI authentication requests. Defaults to the IDCS URI if missing."
},
        "SCOPE": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Scope of agentic AI authentication requests."
},
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y, if the agentic trust is staged and cannot be removed."
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "R",
                    "H"
          ]
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "AI_AGENTIC_LINK"
]
    }
  }
};
// DOCUMENT_USE_PROFILE.js

window.DOCUMENT_USE_PROFILE = {
  "tables": {
    "DOCUMENT_USE_PROFILE": {
      "columns": {
        "DOCUMENT_USE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A global identifier for the document use profile "
        },
        "DOCUMENT_USE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "IS_ALLOWED_UPLOAD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, users with this profile may upload documents to GC3 "
        },
        "IS_TRUSTED_UPLOAD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, users with this profile may upload documents to GC3 without needing a virus check. "
        },
        "MAX_UPLOAD_SIZE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Maximum number of bytes allowed in a document upload "
        },
        "IS_BROWSER_VIRUS_PROTECTED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, users with this profile may view document content regardless of a virus check; the user's browser is assumed to provide virus checking"
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
        }
      },
      "fk_tables": [
        "DOMAIN",
        "GL_USER"
      ]
    }
  }
};

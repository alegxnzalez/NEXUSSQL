// BI_ROLE.js

window.BI_ROLE = {
  "tables": {
    "BI_ROLE": {
      "columns": {
        "BI_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "BI_ROLE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "VPD_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "VPD_PROFILE"
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
        "IDCS_GROUP_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Corresponding IDCS group to the BI Role. This column will be used for mapping OTM users to IDCS groups in OAC."
        }
      },
      "fk_tables": [
        "GL_USER",
        "GL_USER_BI_ROLE"
      ]
    }
  }
};

// PROVINCE_CODE_PROFILE.js

window.PROVINCE_CODE_PROFILE = {
  "tables": {
    "PROVINCE_CODE_PROFILE": {
      "columns": {
        "PROVINCE_CODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Gid to identify the Province Code Profile "
        },
        "PROVINCE_CODE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Xid to identify the Province Code Profile "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "User description of the province code profile "
        },
        "IS_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the province codes in the profile are compatible or incompatible when used by logic"
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
        "PROVINCE_CODE_PROFILE_D",
        "VAT_PROVINCIAL_CNFG_PERSP_D"
      ]
    }
  }
};

// DOMAIN_REMARK.js

window.DOMAIN_REMARK = {
  "tables": {
    "DOMAIN_REMARK": {
      "columns": {
        "REMARK_SEQUENCE": {
          "type": "VARCHAR2(8)",
          "nullable": false,
          "key_value": true,
          "info": "REMARK_SEQUENCE contains the sequence number for the remark for this domain. "
        },
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REMARK_QUAL",
          "info": "REMARK_QUAL_GID contains the unique identifier for the remark qualifier for the domain. "
        },
        "REMARK_TEXT": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "REMARK_TEXT contains the text of the remark for the domain. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOMAIN_SETTING",
          "info": "Domain of the User. DOMAIN_NAME is The primary key"
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
      "fk_tables": []
    }
  }
};

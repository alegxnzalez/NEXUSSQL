// VALID_MAIL_DOMAIN.js

window.VALID_MAIL_DOMAIN = {
  "tables": {
    "VALID_MAIL_DOMAIN": {
      "description": "Status of a validated mail domain.",
      "columns": {
        "MAIL_DOMAIN": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "key_value": true,
          "info": "Validated mail domain."
},
        "IS_SPF_READY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_DKIM_READY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "VALIDATION_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Time the domain was last validated."
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
        "IS_RETURN_PATH_READY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_DMARC_READY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
}
      },
      "fk_tables": []
    }
  }
};
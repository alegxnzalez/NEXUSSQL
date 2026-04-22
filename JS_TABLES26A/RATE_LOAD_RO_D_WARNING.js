// RATE_LOAD_RO_D_WARNING.js

window.RATE_LOAD_RO_D_WARNING = {
  "tables": {
    "RATE_LOAD_RO_D_WARNING": {
      "description": "Captures the warnings related to the rate offerings uploaded during the rate load process.",
      "columns": {
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
        "RATE_LOAD_RO_D_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_LOAD_RO_D",
          "info": "Captures the rate_load_ro_d_seq of the uploaded rate offering."
},
        "RATE_LOAD_WARNING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_LOAD_WARNING",
          "info": "Captures the rate_load_warning_gid for the uploaded rate offering."
},
        "REASON": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Captures the reason for the warning."
}
      },
      "fk_tables": []
    }
  }
};
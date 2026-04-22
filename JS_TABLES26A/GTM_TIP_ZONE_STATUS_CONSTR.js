// GTM_TIP_ZONE_STATUS_CONSTR.js

window.GTM_TIP_ZONE_STATUS_CONSTR = {
  "tables": {
    "GTM_TIP_ZONE_STATUS_CONSTR": {
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
        "GTM_DECLARATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_DECLARATION_TYPE",
          "info": "Declaration Type ID"
},
        "PRIOR_ZONE_STATUS": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_ZONE_STATUS",
          "info": "Prior Zone Status"
},
        "ZONE_STATUS": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TIP_ZONE_STATUS",
          "info": "New Zone Status"
}
      },
      "fk_tables": []
    }
  }
};
// CR_ROUTE_INFEASIBILITY.js

window.CR_ROUTE_INFEASIBILITY = {
  "tables": {
    "CR_ROUTE_INFEASIBILITY": {
      "description": "Infeasibility information for CR Routes.",
      "columns": {
        "CR_ROUTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CR_ROUTE"
},
        "INFEASIBILITY_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true
},
        "INFEASIBILITY_CODE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Code indicating the type of infeasibility."
},
        "CONSTRAINT_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The value of the violated constraint."
},
        "VIOLATING_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The value that has violated the constraint."
},
        "LEG_NUMBER": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The leg in which the constraint has been violated (null if the infeasibility is for the CR Route as a whole)."
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
      "fk_tables": []
    }
  }
};
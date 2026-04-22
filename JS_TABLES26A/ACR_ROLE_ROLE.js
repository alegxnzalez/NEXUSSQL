// ACR_ROLE_ROLE.js

window.ACR_ROLE_ROLE = {
  "tables": {
    "ACR_ROLE_ROLE": {
      "description": "Child roles for a given access control role",
      "columns": {
        "ACR_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACR_ROLE",
          "info": "Parent access control role"
},
        "ACR_CHILD_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ACR_ROLE",
          "info": "Child access control role"
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
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "R",
                    "H"
          ]
}
      },
      "fk_tables": []
    }
  }
};
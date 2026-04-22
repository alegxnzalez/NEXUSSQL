// LINE_APPROVE_TOL_PROFILE_D.js

window.LINE_APPROVE_TOL_PROFILE_D = {
  "tables": {
    "LINE_APPROVE_TOL_PROFILE_D": {
      "description": "Rules that belong to a line approval tolerance profile.",
      "columns": {
        "LINE_APPROVE_TOL_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LINE_APPROVE_TOL_PROFILE",
          "info": "Id of the profile these line approval tolerance rules belong to"
},
        "LINE_APPROVE_TOLERANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LINE_APPROVE_TOLERANCE",
          "info": "Id of a line approval tolerance rule in this profile"
},
        "RULE_SEQUENCE": {
          "type": "NUMBER(9)",
          "nullable": false,
          "info": "User defined sequence in which this rule should be evaluated within the profile"
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
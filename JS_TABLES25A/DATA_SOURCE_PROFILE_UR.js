// DATA_SOURCE_PROFILE_UR.js

window.DATA_SOURCE_PROFILE_UR = {
  "tables": {
    "DATA_SOURCE_PROFILE_UR": {
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
        "DATA_SOURCE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_SOURCE_PROFILE",
          "info": "Data source profile to grant. "
        },
        "USER_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "USER_ROLE",
          "info": "User role grantee to the data source profile. "
        },
        "IS_GRANTED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y, if the data source profile is granted access to the user role; N if it is denied."
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

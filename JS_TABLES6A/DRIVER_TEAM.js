// DRIVER_TEAM.js

window.DRIVER_TEAM = {
  "tables": {
    "DRIVER_TEAM": {
      "columns": {
        "DRIVER_TEAM_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Primary key of the table "
        },
        "PRIMARY_DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DRIVER",
          "info": "primary driver "
        },
        "SECONDARY_DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DRIVER",
          "info": "secondary driver "
        },
        "TEAM_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The name for the Driver team "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "the driver team's effective date "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "the driver team's expiration date"
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

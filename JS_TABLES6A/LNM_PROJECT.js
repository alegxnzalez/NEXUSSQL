// LNM_PROJECT.js

window.LNM_PROJECT = {
  "tables": {
    "LNM_PROJECT": {
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
        "PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "primary key for this table "
        },
        "PROJECT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Captures the description of the Logistics Network Modeling Project description. "
        },
        "PROJECT_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Captures the project_name. "
        },
        "ORDER_SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY",
          "info": "Captures the Saved Query Gid which fetches the order releases that are to be used by this project. "
        },
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PLANNING_PARAMETER_SET",
          "info": "Captures the planning parameter set gid that this project uses. "
        },
        "ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY",
          "info": "Captures the Itinerary Gid that the project runs with. "
        },
        "ITINERARY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY_PROFILE",
          "info": "Captures the Itinerary Profile Gid that the project runs with."
        },
        "SAVED_QUERY_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": true
        }
      },
      "fk_tables": [
        "LNM_SCENARIO"
      ]
    }
  }
};

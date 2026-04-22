// USER_WS_REPORT_ACCESS.js

window.USER_WS_REPORT_ACCESS = {
  "tables": {
    "USER_WS_REPORT_ACCESS": {
      "columns": {
        "USER_ACCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "USER_ACCESS",
          "info": "Defines the visibility of the workspace records.  What this means is that a user_access_gid may be associated with a specific user, a gl_level, or an entire domain.  The UI will choose the most granular level of user_access to show to the user.  So, if a user wants to create his own workspace, the user_access_gid will have the GL_USER populated, and the user_ws_report_access table will define the list of reports for this workspace.  If the user does not create his own workspace, the UI will search at the GL_LEVEL or DOMAIN level to see if a report workspace has been created. "
        },
        "REPORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPORT",
          "info": "Defines a report within the user's workspace. "
        },
        "ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ICON",
          "info": "The icon, or image, associated with the report (foreign keys to ICON table).  The image will appear in the user's workspace. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the id of the user who first entered the record. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the date and time when the record was first entered in the database. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the id of the user who last updated the record. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the date and time when the record was updated in the database."
        }
      },
      "fk_tables": []
    }
  }
};

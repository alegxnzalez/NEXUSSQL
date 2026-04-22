// GL_ACCOUNT_POLICY.js

window.GL_ACCOUNT_POLICY = {
  "tables": {
    "GL_ACCOUNT_POLICY": {
      "columns": {
        "GL_ACCOUNT_POLICY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique global identifier for the account policy. "
        },
        "GL_ACCOUNT_POLICY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The external identifier for the account policy. "
        },
        "PW_EXPIRATION_DURATION": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "Identifies a length of time (in days) before a new password will expire.  A null value indicates the password never expires. "
        },
        "PW_EXPIRATION_WARNING_PERIOD": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "Identifies the length of time(in days) prior to a user'spassword expiration in which the user should receive password expiration messages. "
        },
        "NUM_PW_FOR_HISTORY": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "The number of passwords which should be kept within the history for each user.  The user will not be able to set his password to any password that is kept within the history. "
        },
        "PW_CHANGE_AFTER_RESET": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Determines whether or not a password preset by the system or reset by an account ADMIN user via the User Manager screen will expire upon the first user login. "
        },
        "MAX_ATTEMPTS_ACCOUNT_LOCKOUT": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "The maximum number of login attempts allowed before an account is locked out.  If the number is zero, then there is no lockout. "
        },
        "LOCKOUT_DURATION": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "How long to lock out an account after exceeding allowed login attempts. "
        },
        "LOCKOUT_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The unit of measure for the lockout duration. "
        },
        "LOCKOUT_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The lockout duration in base units. "
        },
        "MAX_DAYS_ACCOUNT_DORMANCY": {
          "type": "NUMBER(10)",
          "nullable": false,
          "info": "Allowed inactive duration (in days)  before an account is disabled. "
        },
        "KEEP_LOGIN_HISTORY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Whether or not to maintain a login history for the users."
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
      "fk_tables": [
        "GL_ACCOUNT_PW_RULE",
        "GL_USER"
      ]
    }
  }
};

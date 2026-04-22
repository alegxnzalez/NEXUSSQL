// GL_USER.js

window.GL_USER = {
  "tables": {
    "GL_USER": {
      "columns": {
        "GL_USER_GID": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "GL_USER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "GL_PASSWORD": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LAST_LOGIN_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "GL_ACCOUNT_POLICY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_ACCOUNT_POLICY",
          "info": "The account policy the user is associated with (defines rules for passwords, etc.) "
        },
        "PW_EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the current password will expire. "
        },
        "ACCOUNT_LOCKOUT_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Determines the time that the account was locked out, due to invalid password attempts. "
        },
        "USERNAME": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "DEFAULT_USER_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "USER_ROLE"
        },
        "IS_EXTERNAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "DEFAULT_AA_REPORT": {
          "type": "VARCHAR2(100)",
          "nullable": true
        },
        "BI_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BI_ROLE"
        },
        "DOCUMENT_USE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DOCUMENT_USE_PROFILE",
          "info": "Profile defining document upload and view for this user. Overrides use profile for the domain. "
        },
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the user is reserved by OTM: it cannot be deleted and it's user role is unmutable. "
        },
        "FORCE_PASSWORD_RESET": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the user must reset his password on the next login "
        },
        "AUTO_APPROVE_RULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AUTO_APPROVE_RULE_PROFILE",
          "info": "Added to Link the user to a profile that establishes approval amounts by Transportation Mode "
        },
        "UNSUCCESSFUL_LOGIN_ATTEMPTS": {
          "type": "NUMBER()",
          "nullable": true
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
        "SALT": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "This is a base 64 encoded randomly generated ID unique to each user for each new password. "
        },
        "HASH_ALG": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "This is metadata used to identify the digest algorithm used to produce the encrypted password. "
        },
        "ITERATION_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "User effective date "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "user expiration date "
        },
        "IS_OBIEE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If 'Y', the user maps to an OBIEE LDAP user. Creation and removal of this user, along with any password modifications, should be delegated to OBIEE. "
        },
        "FIRST_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The given name of the user. "
        },
        "LAST_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The surname of the user. "
        },
        "EMAIL_ADDRESS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The email address of the user."
        }
      },
      "fk_tables": [
        "ACCOUNT_USER_ASSOCIATION",
        "BULK_PLAN",
        "CONTACT",
        "DATA_SOURCE",
        "EXPLANATION",
        "FLEET_BULK_PLAN",
        "GL_PASSWORD_HISTORY",
        "GL_USER_ACR_ROLE",
        "GL_USER_AUTH",
        "GL_USER_BI_APP",
        "GL_USER_BI_ROLE",
        "GL_USER_SHP_AGNT_CONTACT_JOIN",
        "LONG_RUNNING_TASK",
        "MESSAGE_TYPE",
        "PROBLEM",
        "PROBLEM_NOTE",
        "REPORT_LOG",
        "TRANSPORTATION_WORKBENCH",
        "USER_ACCESS",
        "USER_APPDATA",
        "USER_ASSOCIATION",
        "USER_FAVORITE_TABLE",
        "USER_ROLE_GRANT",
        "WORK_ASSIGNMENT_BULK_PLAN",
        "WORK_QUEUE_ASSIGNMENT"
      ]
    }
  }
};

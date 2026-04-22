// EXTERNAL_SYSTEM.js

window.EXTERNAL_SYSTEM = {
  "tables": {
    "EXTERNAL_SYSTEM": {
      "columns": {
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "EXTERNAL_SYSTEM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true
        },
        "URL": {
          "type": "VARCHAR2(1024)",
          "nullable": true
        },
        "USER_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "PASSWORD": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "USE_GLCREDENTIAL": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "MAX_BYTES_PER_TRANSMISSION": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "MAX_TRANSACTS_PER_TRANSMISSION": {
          "type": "NUMBER(5)",
          "nullable": true
        },
        "IP_ADDRESS": {
          "type": "VARCHAR2(15)",
          "nullable": true
        },
        "HOSTNAME": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "EXPECTED_RESPONSE_TIME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Used in notify as guaranteed delivery.  Set the expected response time in second from receiving external system. "
        },
        "IS_GUARANTEED_DELIVERY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Flag that indicates whether the notification is a guaranteed delivery.  A guaranteed delivery is a special type of notification where the receiver sends response back to the sender indicating whether the received message can be /or has been processed. "
        },
        "REMOTE_DIRECTORY": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "CONNECTION_MODE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ACTIVE",
            "PASV"
          ]
        },
        "INT_QUEUE_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "SOCKET_TIMEOUT": {
          "type": "NUMBER(4)",
          "nullable": false,
          "info": "HTTP read/write timeount in seconds. A value of 0 means no timeout. "
        },
        "BPEL_DOMAIN": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "BPEL_FLOW": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "BPEL_PROCESS": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "BPEL_PROVIDER": {
          "type": "VARCHAR2(1024)",
          "nullable": true
        },
        "ACTIVE_MODE": {
          "type": "VARCHAR2(13)",
          "nullable": true,
          "values": [
            "ENABLED",
            "DISABLE_SEND",
            "DISABLE_BUILD",
            "DISABLED"
          ],
          "info": "Used to enable or disable sending to the external system.  When set to Enabled it will generate and send the xml (default mode); Disable Send will generate and store the xml without sending; Disable Build will log an entry in the i_transmission and i_transaction tables without generating the xml blob; and Disabled will not log, generate, or send. "
        },
        "IS_ENABLE_DEBUG": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if debugging is enabled for the external system. "
        },
        "IS_LOG_RESPONSE_MSG": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the response received should be logged. "
        },
        "REATTEMPT_MODE": {
          "type": "VARCHAR2(5)",
          "nullable": true,
          "values": [
            "NONE",
            "REDO",
            "DELAY"
          ],
          "info": "Specifies the type of logic used to setup reattempts to send to the external system.  If None, no reattempts are made.  If Redo, then the status of the transmission will be set to REDO when an error occurs and the REDO transmission processing will manage a resend.  If Delay, then the reattempt_delay field is used to indicate how long to wait before the next attempt. "
        },
        "REATTEMPT_MAX": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "Specifies the max number of attempts to send the transmission to the external system. "
        },
        "REATTEMPT_DELAY": {
          "type": "NUMBER(8)",
          "nullable": true,
          "info": "Specifies the amount of time to wait before another attempt to send can be made. "
        },
        "REATTEMPT_DEADLINE": {
          "type": "NUMBER(8)",
          "nullable": true,
          "info": "Specifies the max time from when the transmission is created that an attempt will be made to send the transmission. "
        },
        "MAX_THREADS": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "Specifies the max number of threads that should be used for this external system.  This should help limit a bad destination taking up all the threads. "
        },
        "FTP_APPEND_FILE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the FTP protocol should use the append file mode to send the data to the FTP server in batches, or should use the put mode where the whole transmission is sent at once. "
        },
        "HTTP_ACK_EXPECTED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the Transmission Ack is expected to be received when sending via synchronous protocol. "
        },
        "HTTP_USE_ACK_STATUS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the Transmission Ack status should be used as the status of the Transmission "
        },
        "HTTP_READ_RESPONSE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the HTTP response conde should be validated. "
        },
        "SERVICE_ACK_EXPECTED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the Transmission Ack is expected to be received when sending via synchronous protocol. "
        },
        "SERVICE_USE_ACK_STATUS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the Transmission Ack status should be used as the status of the Transmission "
        },
        "BPEL_ACK_EXPECTED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the Transmission Ack is expected to be received when sending via synchronous protocol. "
        },
        "BPEL_USE_ACK_STATUS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the Transmission Ack status should be used as the status of the Transmission "
        },
        "BPEL_DOMAIN_PW": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Specifies the password for the BPEL domain. "
        },
        "BPEL_JNS_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Specifies the java.naming.security.principal property for connecting to the BPEL instance using RMI. "
        },
        "BPEL_JNS_PW": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Specifies the java.naming.security.credentials property for connecting to the BPEL instance using RMI. "
        },
        "BPEL_MODE": {
          "type": "VARCHAR2(7)",
          "nullable": true,
          "values": [
            "RMI",
            "SERVICE"
          ],
          "info": "Specifies if the BPEL notify method should use RMI or SERVICE to send to the BPEL server. "
        },
        "HTTP_CLOSE_CONNECTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If it is \"Y\", close the HTTPPOST connection "
        },
        "DELAYED_STREAM_TRANSPORT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If it is \"Y\", the XML is loaded before sending out and transported through data stream "
        },
        "REATTEMPT_DELAY_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "REATTEMPT_DELAY_UOM_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "REATTEMPT_DEADLINE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "REATTEMPT_DEADLINE_UOM_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "INT_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INT_PREFERENCE"
        },
        "USE_FTPS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
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
        "USE_PROXY_SERVER": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Determines whether the messages or request should be passed through the proxy server or not. "
        },
        "SEND_DIGEST": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "HTTP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HTTP_PROFILE"
        },
        "RESPONSE_STYLESHEET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE"
        },
        "INCLUDE_NAMESPACE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "info": "NULL, NONE, DEFAULT and STRICT to be allowable values "
        },
        "FTP_PORT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Port # when external system is used for FTP or FTPS "
        },
        "TARGET_NAMESPACE": {
          "type": "VARCHAR2(60)",
          "nullable": true,
          "info": "Indicates which version of the Transmission should be sent to this external system"
        }
      },
      "fk_tables": [
        "CONTACT",
        "CONTENT_SOURCE",
        "DISTANCE_EXTERNAL_ENGINE",
        "EXTERNAL_SYSTEM_OUT_XML",
        "EXTERNAL_SYSTEM_SERVICE",
        "EXT_RE_FIELDSET",
        "GTM_CONTENT_SOURCE_CONFIG",
        "GTM_CONTENT_SOURCE_EXT_SYS",
        "INT_EXT_SYS_TRANSLATION",
        "I_TRANSMISSION",
        "Q_INTEGRATION_OUT",
        "SERVICE_EXTERNAL_ENGINE"
      ]
    }
  }
};

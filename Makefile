TOKEN=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidXNlciIsImlhdCI6MTQzMjQzOTYyN30.0mDPOpNcB9MJ4Me8pi1KCzGGG2H5goXDgpJVCNx7-N8

seed:
	curl -X POST http://127.0.0.1:4000/api/v1/nations -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/nations -H "Authorization: Bearer $(TOKEN)"  \

	curl -X POST http://127.0.0.1:4000/api/v1/stadiums -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/stadiums -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/stadiums -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/stadiums -H "Authorization: Bearer $(TOKEN)"  \

	curl -X POST http://127.0.0.1:4000/api/v1/divisions -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/divisions -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/divisions -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/divisions -H "Authorization: Bearer $(TOKEN)" \

	curl -X POST http://127.0.0.1:4000/api/v1/clubs -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/clubs -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/clubs -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/clubs -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/clubs -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/clubs -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/clubs -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/clubs -H "Authorization: Bearer $(TOKEN)" \

	curl -X POST http://127.0.0.1:4000/api/v1/managers -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/managers -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/managers -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/managers -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/managers -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/managers -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/managers -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/managers -H "Authorization: Bearer $(TOKEN)" \

	curl -X POST http://127.0.0.1:4000/api/v1/bots -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/bots -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/bots -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/bots -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/bots -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/bots -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/bots -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/bots -H "Authorization: Bearer $(TOKEN)" \

	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" && \
	curl -X POST http://127.0.0.1:4000/api/v1/players -H "Authorization: Bearer $(TOKEN)" \
